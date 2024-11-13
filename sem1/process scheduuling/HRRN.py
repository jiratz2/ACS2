# to use this program you must install "pip install matplotlib" in your computer command prompt

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

class Process:
    def __init__(self, name, arrival, burst):
        self.name = name
        self.arrival = arrival
        self.burst = burst
        self.waiting = 0
        self.turnaround = 0
        self.start_time = 0
        self.end_time = 0
        self.completed = False

def hrrn_scheduling(processes):
    n = len(processes)
    time = 0
    completed_count = 0
    total_waiting_time = 0
    total_turnaround_time = 0
    gantt_chart = []

    while completed_count < n:
        highest_rr = -1
        selected_process = None

        # Find the process with the highest response ratio
        for process in processes:
            if process.arrival <= time and not process.completed:
                response_ratio = (time - process.arrival + process.burst) / process.burst
                if response_ratio > highest_rr:
                    highest_rr = response_ratio
                    selected_process = process

        if selected_process:
            # Update start and end times for Gantt chart
            selected_process.start_time = time
            selected_process.end_time = time + selected_process.burst

            # Update time and calculate waiting and turnaround times
            time += selected_process.burst
            selected_process.waiting = time - selected_process.arrival - selected_process.burst
            selected_process.turnaround = time - selected_process.arrival
            selected_process.completed = True
            completed_count += 1

            # Sum up waiting and turnaround times
            total_waiting_time += selected_process.waiting
            total_turnaround_time += selected_process.turnaround

            # Add to Gantt chart list
            gantt_chart.append((selected_process.name, selected_process.start_time, selected_process.end_time))
        else:
            time += 1  # Increment time if no process is ready

    # Display scheduling results
    print("\nName\tArrival\tBurst\tWaiting\tTurnaround\tStart\tEnd")
    for process in processes:
        print(f"{process.name}\t{process.arrival}\t{process.burst}\t"
              f"{process.waiting}\t{process.turnaround}\t"
              f"{process.start_time}\t{process.end_time}")

    print(f"\nAverage Waiting Time: {total_waiting_time / n:.2f}")
    print(f"Average Turnaround Time: {total_turnaround_time / n:.2f}")

    # Generate Gantt Chart
    draw_gantt_chart(gantt_chart)

# Function to draw Gantt Chart
def draw_gantt_chart(gantt_chart):
    fig, ax = plt.subplots(figsize=(10, 4))

    for i, (process, start, end) in enumerate(gantt_chart):
        ax.barh(y=1, width=end - start, left=start, height=0.4, align='center', label=process)
        ax.text(x=(start + end) / 2, y=1, s=process, ha='center', va='center', color='white')

    ax.set_xlabel("Time")
    ax.set_yticks([])
    ax.set_xlim(0, gantt_chart[-1][2] + 1)
    ax.legend(title="Processes")
    plt.title("Gantt Chart")
    plt.show()

# Getting user input
def get_input():
    n = int(input("Enter the number of processes: "))
    processes = []

    for i in range(n):
        name = input(f"\nEnter the name for process {i + 1}: ")
        arrival = int(input(f"Enter the arrival time for {name}: "))
        burst = int(input(f"Enter the burst time for {name}: "))
        processes.append(Process(name, arrival, burst))
    
    return processes

# Main function to run the scheduler
if __name__ == '__main__':
    processes = get_input()
    hrrn_scheduling(processes)

# test case 
# A 0 3
# B 2 6
# C 4 4
# D 6 5
# E 8 2