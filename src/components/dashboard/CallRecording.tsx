import { useState } from "react"
import { CalendarDays, Download, Filter, Info, Play } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"

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
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Recording {
    id: string
    date: string
    source: string
    status: string
    duration: string
    callDetails: string
}

export default function CallRecording() {
    const [date, setDate] = useState<Date>()
    const [includeDeleted, setIncludeDeleted] = useState(false)
    const [recordings] = useState<Recording[]>([
        {
            id: "1",
            date: "2024-11-11 12:26:55 IST",
            source: "OutboundAPI",
            status: "Completed",
            duration: "21 sec",
            callDetails: "Call Details",
        },
        {
            id: "2",
            date: "2024-11-10 10:21:50 IST",
            source: "OutboundAPI",
            status: "Completed",
            duration: "25 sec",
            callDetails: "Call Details",
        },
        {
            id: "3",
            date: "2024-11-10 10:21:42 IST",
            source: "OutboundAPI",
            status: "Completed",
            duration: "31 sec",
            callDetails: "Call Details",
        }
    ])

    return (
        <div className="flex flex-col h-full">
            <div className="border-b px-5">
                <div className="container flex items-center gap-4 py-4">
                    <h1 className="text-lg font-semibold">Recording Logs</h1>
                </div>
            </div>

            <div className="container p-4 space-y-4">
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        One step away from Voice Intelligence
                    </AlertDescription>
                </Alert>

                <div className="rounded-lg border">
                    <div className="p-4 space-y-4">
                        <div className="flex gap-4 items-center">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-[300px] justify-start text-left font-normal">
                                        <CalendarDays className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : "Date & Time Range"}
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

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="deleted"
                                    checked={includeDeleted}
                                    onCheckedChange={(checked) => { if (typeof checked == 'boolean') setIncludeDeleted(checked) }}
                                />
                                <label
                                    htmlFor="deleted"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Include Deleted
                                </label>
                            </div>

                            <Button variant="outline">Clear</Button>
                            <Button>
                                <Filter className="mr-2 h-4 w-4" />
                                Filter
                            </Button>

                            <div className="ml-auto flex items-center gap-2">
                                <Select defaultValue="50">
                                    <SelectTrigger className="w-[130px]">
                                        <SelectValue placeholder="Rows per page" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">10 Per Page</SelectItem>
                                        <SelectItem value="25">25 Per Page</SelectItem>
                                        <SelectItem value="50">50 Per Page</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" />
                                    CSV
                                </Button>
                            </div>
                        </div>

                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[30px]">
                                            <Checkbox />
                                        </TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Duration</TableHead>
                                        <TableHead>Recording</TableHead>
                                        <TableHead>Call Details</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recordings.map((recording) => (
                                        <TableRow key={recording.id}>
                                            <TableCell>
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>{recording.date}</TableCell>
                                            <TableCell>
                                                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                                                    {recording.status}
                                                </span>
                                            </TableCell>
                                            <TableCell>{recording.duration}</TableCell>
                                            <TableCell>
                                                <Button size="icon" variant="ghost">
                                                    <Play className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="link" className="text-primary">
                                                    {recording.callDetails}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}