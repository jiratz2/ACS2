#วาดวงกลม
import cv2

img = cv2.imread("image/cat.jpg")
imgresize =cv2.resize(img, (700,700))

#circle(ภาพ,จุดศูนย์กลาง(x,y),รัศมี,สี(BGR),ความหนา)
cv2.circle(imgresize,(200,200),70,(0,0,255),20)

cv2.imshow("Mycat", imgresize)
cv2.waitKey(0)
cv2.destroyAllWindows()