#แสดงพิกัดด้วย mouse event
import cv2

img = cv2.imread("image/tree.jpg")

def clickPosition(event,x,y,flags,param):
    if event == cv2.EVENT_LBUTTONDOWN:
        text = str(x) + "," + str(y)
        cv2.putText(img,text,(x,y),cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,0),cv2.LINE_4)
        cv2.imshow("Output", img)
    elif event == cv2.EVENT_RBUTTONDOWN:
        text = str(x) + "," + str(y)
        cv2.putText(img,text,(x,y),cv2.FONT_HERSHEY_SIMPLEX,1,(255,255,255),cv2.LINE_4)
        cv2.imshow("Output", img)


cv2.imshow("Output", img)
# work with mouse event
cv2.setMouseCallback("Output",clickPosition)
cv2.waitKey(0)
cv2.destroyAllWindows()