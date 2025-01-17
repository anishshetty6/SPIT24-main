/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1bqhz36ISlg
 */
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"
import { analytics } from "@/analytics"

export function Burnupdown() {
  return (
    <div className="flex flex-col mt-5 items-center justify-center min-h-screen bg-[#f4f7f9] p-4">
      <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <FlameIcon className="text-yellow-500" />
            <h2 className="text-xl font-semibold">Burnup</h2>
          </div>
          <p className="text-sm text-gray-600">Amount of work done in a sprint.</p>
          <div className="space-y-2">
            <Select>
              <SelectTrigger id="sprint-source">
                <SelectValue placeholder="Goal" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="goal">Goal</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="goal">
                <SelectValue placeholder="Sprint 1" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="sprint1">Sprint 1</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-gray-500" />
              <span className="text-sm">11/4/19 - 11/17/19</span>
            </div>
            <Select>
              <SelectTrigger id="amount-of-work">
                <SelectValue placeholder="Number of tasks" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="number-of-tasks">Number of tasks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="text-sm" variant="ghost">
            Show more
          </Button>
          <BurnUp className="w-full h-[300px]" />
        </div>
        <div className="w-1/2 p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <FlameIcon className="text-red-500" />
            <h2 className="text-xl font-semibold">Burndown</h2>
          </div>
          <p className="text-sm text-gray-600">Amount of work left to do in a sprint.</p>
          <div className="space-y-2">
            <Select>
              <SelectTrigger id="sprint-source-burndown">
                <SelectValue placeholder="Goal" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="goal">Goal</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="goal-burndown">
                <SelectValue placeholder="Sprint 1" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="sprint1">Sprint 1</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-gray-500" />
              <span className="text-sm">11/4/19 - 11/17/19</span>
            </div>
            <Select>
              <SelectTrigger id="amount-of-work-burndown">
                <SelectValue placeholder="Number of tasks" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="number-of-tasks">Number of tasks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="text-sm" variant="ghost">
            Show more
          </Button>
          <BurnDown className="w-full h-[300px]" />
        </div>
      </div>
      <Button className="mt-4 bg-blue-600 text-white">Add Widget</Button>
    </div>
  )
}


function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function BurnUp(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={analytics.burnup}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function BurnDown(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={analytics.burndown}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}