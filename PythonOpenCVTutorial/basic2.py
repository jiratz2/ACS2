#การเขียนภาพ
import cv2

img = cv2.imread("image/cat.jpg",0)
#เลขตัวท้ายสุดคือระบุโหมดสีภาพ 0 คือเกรย์สเกล
imgresize = cv2.resize(img, (400,400))
cv2.imshow("Mycat", imgresize)

cv2.imwrite("output.jpg",imgresize)
#ตัวแรกเป็นชื่อตามด้วยนามสกุลของไฟล์ที่จะส่งออก ตัวหลังคือภาพที่เราจะใช้ส่งออก

cv2.waitKey(0)
cv2.destroyAllWindows()