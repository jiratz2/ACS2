import cv2

img = cv2.imread("image/cat.jpg")
imgresize =cv2.resize(img, (700,700))

#ใส่ข้อความบนภาพ
#putText(ภาพ,ข้อความ,ตำแหน่ง(x,y),ฟ้อนต์,ขนาด,สี,ความหนา,ระยะห่างข้อความ) 
cv2.putText(imgresize,"Cat",(150,200),cv2.FONT_HERSHEY_SIMPLEX,2.5,(0,0,255),cv2.LINE_AA)

cv2.imshow("Mycat", imgresize)
cv2.waitKey(0)
cv2.destroyAllWindows()