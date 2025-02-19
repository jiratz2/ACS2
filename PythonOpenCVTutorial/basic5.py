#ปรับโหมดภาพเป็นเกรย์สเกล
import cv2

cap = cv2.VideoCapture("image/video.mp4")

while (cap.isOpened()):
    check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame

    if check == True: #check ว่าถึงเฟรมสุดท้ายหรือยัง ถ้าหมดแล้วก้จะหยุดถ้ายังก้จะเล่นต่อ
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        cv2.imshow("Output",gray)
        if cv2.waitKey(1) & 0xFF == ord('e'): #ถ้ากด e ให้หยุดการทำงาน
            break
    else:
        break

cap.release()
cv2.destroyAllWindows()