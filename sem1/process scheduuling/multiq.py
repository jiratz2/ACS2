from collections import deque

class Process:
    def __init__(self, name, arrival, burst, priority):
        self.name = name
        self.arrival = arrival
        self.burst = burst
        self.remaining = burst
        self.priority = priority
        self.waiting = 0
        self.turnaround = 0
        self.completed = False

def multilevel_feedback(processes, time_quantum1=4, time_quantum2=8):
    # Initialize the queues based on priority levels
    q1, q2, q3 = deque(), deque(), deque()
    time = 0
    completed_processes = []

    # Separate processes into queues based on initial priority
    for process in sorted(processes, key=lambda x: x.arrival):
        if process.priority == 1:
            q1.append(process)
        elif process.priority == 2:
            q2.append(process)
        else:
            q3.append(process)

    print("Gantt Chart:")

    while q1 or q2 or q3:
        # Queue 1: High Priority with Round Robin (time quantum = 4)
        if q1:
            process = q1.popleft()
            execute_time = min(time_quantum1, process.remaining)
            process.remaining -= execute_time
            print(f"{process.name}({time} - {time + execute_time})", end=" -> ")
            time += execute_time
            
            if process.remaining > 0:
                q2.append(process)  # Move to Queue 2
            else:
                process.completed = True
                process.turnaround = time - process.arrival
                process.waiting = process.turnaround - process.burst
                completed_processes.append(process)

        # Queue 2: Medium Priority with Round Robin (time quantum = 8)
        elif q2:
            process = q2.popleft()
            execute_time = min(time_quantum2, process.remaining)
            process.remaining -= execute_time
            print(f"{process.name}({time} - {time + execute_time})", end=" -> ")
            time += execute_time
            
            if process.remaining > 0:
                q3.append(process)  # Move to Queue 3
            else:
                process.completed = True
                process.turnaround = time - process.arrival
                process.waiting = process.turnaround - process.burst
                completed_processes.append(process)

        # Queue 3: Low Priority with First-Come, First-Serve (no time quantum)
        elif q3:
            process = q3.popleft()
            execute_time = process.remaining
            process.remaining = 0
            print(f"{process.name}({time} - {time + execute_time})", end=" -> ")
            time += execute_time
            
            process.completed = True
            process.turnaround = time - process.arrival
            process.waiting = process.turnaround - process.burst
            completed_processes.append(process)

    # Print results
    print("\n\nProcess\tArrival\tBurst\tPriority\tWaiting\tTurnaround")
    total_waiting = 0
    total_turnaround = 0
    for process in completed_processes:
        total_waiting += process.waiting
        total_turnaround += process.turnaround
        print(f"{process.name}\t{process.arrival}\t{process.burst}\t{process.priority}\t\t"
              f"{process.waiting}\t{process.turnaround}")

    print(f"\nAverage Waiting Time: {total_waiting / len(completed_processes):.2f}")
    print(f"Average Turnaround Time: {total_turnaround / len(completed_processes):.2f}")

# Function to get user input
def get_input():
    n = int(input("Enter the number of processes: "))
    processes = []

    for i in range(n):
        name = input(f"\nEnter the name for process {i + 1}: ")
        arrival = int(input(f"Enter the arrival time for {name}: "))
        burst = int(input(f"Enter the burst time for {name}: "))
        priority = int(input(f"Enter the priority level for {name} (1-High, 2-Medium, 3-Low): "))
        processes.append(Process(name, arrival, burst, priority))
    
    return processes

# Main function to run the scheduler
if __name__ == '__main__':
    processes = get_input()
    multilevel_feedback(processes)


# test case 
# A 0 3
# B 2 6
# C 4 4
# D 6 5
# E 8 2