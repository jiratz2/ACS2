#บอกวันเวลาในกล้อง
import cv2
import datetime

cap =cv2.VideoCapture(0)
while (cap.isOpened()):
    check, frame = cap.read()

    if check == True:
        currentDate = str(datetime.datetime.now())
        cv2.putText(frame,currentDate,(10,30),cv2.FONT_HERSHEY_SIMPLEX,0.8,(255,255,255),cv2.LINE_4)
        cv2.imshow("Output",frame)
        if cv2.waitKey(1) & 0xFF == ord('e'):
            break
    else:
        break

cap.release()
cv2.destroyAllWindows()