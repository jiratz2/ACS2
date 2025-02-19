#การวาดสี่เหลี่ยม
import cv2

img = cv2.imread("image/cat.jpg")
imgresize =cv2.resize(img, (700,700))

#rectangle(ภาพ,มุมที่ 1 บนซ้าย(x,y),มุมที่ 2 ล่างขวา(x,y),สี(BGR),ความหนา)
#ถ้าใส่ความหนาเป็น -1 จะเป็นการเติมสีเต็ม
cv2.rectangle(imgresize,(100,100),(500,500),(0,0,255),-1)

cv2.imshow("Mycat", imgresize)
cv2.waitKey(0)
cv2.destroyAllWindows()