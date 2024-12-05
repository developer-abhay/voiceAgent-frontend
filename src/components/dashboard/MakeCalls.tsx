'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cloud, Upload, Download } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    agent: z.string().min(1, "Please select an agent"),
    retries: z.number().int().min(0).max(10),
    rescheduleTime: z.number().int().min(1),
    rescheduleUnit: z.enum(["minutes", "hours", "days"]),
    csvFile: z.instanceof(File).optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function MakeCallsForm({ onClose }: { onClose: () => void }) {
    const [isDragging, setIsDragging] = useState(false);
    const [csvFileName, setCsvFileName] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            agent: "",
            retries: 1,
            rescheduleTime: 1,
            rescheduleUnit: "hours",
        },
    })

    const onSubmit = (values: FormValues) => {
        console.log(values)
        onClose()
    }

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files[0]
        if (file && file.type === "text/csv") {
            form.setValue('csvFile', file)
            setCsvFileName(file.name)
        }
    }, [form])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            form.setValue('csvFile', file)
            setCsvFileName(file.name)
        }
    }

    const handleDownloadTemplate = () => {
        // Create a sample CSV content
        const csvContent = "Name,Phone Number,Email\nJohn Doe,+1234567890,john@example.com\nJane Smith,+0987654321,jane@example.com";

        // Create a Blob with the CSV content
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        // Create a link element and trigger the download
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "call_list_template.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="agent"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Select Agent</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an agent" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="agent1">Agent 1</SelectItem>
                                        <SelectItem value="agent2">Agent 2</SelectItem>
                                        <SelectItem value="agent3">Agent 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="retries"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Number of Retries</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : '')}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="rescheduleTime"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Reschedule Time</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : '')}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rescheduleUnit"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Reschedule Unit</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select unit" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="minutes">Minutes</SelectItem>
                                        <SelectItem value="hours">Hours</SelectItem>
                                        <SelectItem value="days">Days</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="csvFile"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                            <FormLabel>Upload CSV</FormLabel>
                            <div className="mb-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleDownloadTemplate}
                                    className="w-full"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Template
                                </Button>
                            </div>
                            <FormControl>
                                <div
                                    className={`relative border-2 border-dashed rounded-lg p-6 ${isDragging ? 'border-primary bg-primary/10' : 'border-muted-foreground/25'
                                        }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        {...rest}
                                    />
                                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                                        <Cloud className="h-10 w-10 text-muted-foreground" />
                                        <div className="text-sm">
                                            <span className="font-semibold">Choose a csv</span> or drag & drop it here
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Up to 50 MB
                                        </div>
                                        {csvFileName && (
                                            <div className="text-sm text-primary font-medium mt-2">
                                                Selected: {csvFileName}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={!form.watch('csvFile')}>Start Calls</Button>
            </form>
        </Form>
    )
}