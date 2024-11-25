import { useEffect, useState } from "react"
import { CalendarDays, Download, Search, Settings } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useCallDetails from "@/hooks/useCallDetails"
import { CallDetails } from "@/interfaces/Dashboard"


export default function CallLogs() {
    const [date, setDate] = useState<Date>()
    const { callDetails, fetchCallDetails, loading } = useCallDetails()
    const [filteredCalls, setFilteredCalls] = useState<CallDetails[]>()

    useEffect(() => {
        fetchCallDetails('college');

    }, [])

    useEffect(() => {

    }, [callDetails])

    return (
        <div className="flex flex-col h-full">
            <div className="border-b px-4">
                <div className="container flex items-center gap-4 py-4">
                    <h1 className="text-lg font-semibold">Call Logs</h1>
                </div>
            </div>
            <div className="container p-4">
                <div className="rounded-lg border">
                    <div className="p-4 space-y-4">
                        <div className="grid gap-4 md:grid-cols-5">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarDays className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : "Date/Time Range"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>

                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="no-answer">No Answer</SelectItem>
                                    <SelectItem value="failed">Failed</SelectItem>
                                </SelectContent>
                            </Select>

                            <Input placeholder="From" />
                            <Input placeholder="To" />

                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Call Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="outbound">Outbound</SelectItem>
                                    <SelectItem value="inbound">Inbound</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Look up Call SID, Trunk SID, or SIP Call ID" className="pl-8" />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Configure Columns
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuCheckboxItem checked>Call SID and Date</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked>Direction</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked>From</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked>To</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked>Duration</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Export CSV
                            </Button>
                        </div>

                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[250px]">Call SID and Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        {/* <TableHead>Direction</TableHead> */}
                                        <TableHead>From</TableHead>
                                        <TableHead>To</TableHead>
                                        <TableHead>Duration</TableHead>

                                    </TableRow>
                                </TableHeader>
                                {loading ?
                                    (<div className="w-full h-[200px] bg-slate-300 flex justify-center items-center">Loading....</div>) :
                                    (<TableBody>
                                        {callDetails?.map((call) => (
                                            <TableRow key={call.callSid}>
                                                <TableCell>
                                                    <div className="space-y-0.5">
                                                        <div className="text-sm font-medium text-primary">{call.callSid}</div>
                                                        <div className="text-xs text-muted-foreground">{call.initiatedTime}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${call.callStatus === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                                        }`}>
                                                        {call.callStatus}
                                                    </span>
                                                </TableCell>
                                                {/* <TableCell>{call.direction}</TableCell> */}
                                                <TableCell>{call.fromPhoneNumber}</TableCell>
                                                <TableCell>{call.toPhoneNumber}</TableCell>

                                                <TableCell>{call.callDuration ? call.callDuration : '0'}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>)}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}