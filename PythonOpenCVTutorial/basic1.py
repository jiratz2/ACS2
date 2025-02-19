import cv2

#read image
img = cv2.imread("image/cat.jpg",-1)
print(type(img.ndim))
print(img)

#resize image
imgresize = cv2.resize(img, (400,400))
cv2.imshow("Output", imgresize)
cv2.waitKey(0)
cv2.destroyAllWindows()


#แสดงผลภาพ
# cv2.imshow("Output", img)
# #หน่วยมิลลิเซคสำหรับตั้งค่าการปิดหน้าต่างการแสดงผล
# cv2.waitKey(delay=5000) 
# #คืนค่าทรัพยากรให้เครื่อง
# cv2.destroyAllWindows()


