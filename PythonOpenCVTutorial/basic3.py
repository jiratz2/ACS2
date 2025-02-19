#เปิดกล้อง 
import cv2

cap = cv2.VideoCapture(0)

while (True):
    check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame
    cv2.imshow("Output",frame)

    if cv2.waitKey(1) & 0xFF == ord('e'): #ถ้ากด e ให้หยุดการทำงาน
        break

cap.release()
#คือค่าทรัพยากร
cv2.destroyAllWindows()