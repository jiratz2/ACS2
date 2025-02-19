#color detection by mouse event
import cv2

img = cv2.imread("image/tree.jpg")

def clickPosition(event,x,y,flags,param):
    if event == cv2.EVENT_LBUTTONDOWN:
        blue = img[y,x,0]
        green = img[y,x,1]
        red = img[y,x,2]

        text = str(blue) + "," + str(green) + "," + str(red)
        cv2.putText(img,text,(x,y),cv2.FONT_HERSHEY_SIMPLEX,0.8,(0,0,0),cv2.LINE_4)
        cv2.imshow("Output", img)


cv2.imshow("Output", img)
# work with mouse event
cv2.setMouseCallback("Output",clickPosition)
cv2.waitKey(0)
cv2.destroyAllWindows()