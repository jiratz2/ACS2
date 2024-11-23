"use client"

import React, { useState } from 'react';

const FlashcardFolderManager = () => {
  const [folder, setFolder] = useState({
    name: '',
    description: '',
  });

  const [flashcards, setFlashcards] = useState([
    { term: '', definition: '' }, // ฟอร์มคำศัพท์เริ่มต้น
  ]);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFolderChange = (e) => {
    const { name, value } = e.target;
    setFolder({
      ...folder,
      [name]: value,
    });
    setError('');
  };

  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { term: '', definition: '' }]); // เพิ่มฟอร์มคำศัพท์ใหม่
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!folder.name.trim()) {
      setError('กรุณาใส่ชื่อโฟลเดอร์');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://your-api-endpoint.com/api/folders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          folder,
          flashcards,
        }),
      });

      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }

      const data = await response.json();
      alert('บันทึกข้อมูลสำเร็จ!');
      console.log('Response:', data);

      // ล้างข้อมูลหลังบันทึกสำเร็จ
      setFolder({ name: '', description: '' });
      setFlashcards([{ term: '', definition: '' }]);
    } catch (error) {
      console.error('Error:', error);
      setError('ไม่สามารถบันทึกข้อมูลได้');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>สร้างโฟลเดอร์และจัดการคำศัพท์</h2>
      <form onSubmit={handleSubmit}>
        {/* ส่วนกรอกข้อมูลโฟลเดอร์ */}
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>ข้อมูลโฟลเดอร์</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>ชื่อโฟลเดอร์:</label>
            <input
              type="text"
              name="name"
              value={folder.name}
              onChange={handleFolderChange}
              placeholder="กรอกชื่อโฟลเดอร์"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>คำอธิบาย:</label>
            <textarea
              name="description"
              value={folder.description}
              onChange={handleFolderChange}
              placeholder="เพิ่มคำอธิบายเกี่ยวกับโฟลเดอร์"
              style={{ width: '100%', padding: '8px', marginTop: '5px', height: '80px' }}
            ></textarea>
          </div>
          {error && (
            <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>
          )}
        </div>

        {/* ส่วนกรอกข้อมูลคำศัพท์ */}
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>คำศัพท์และคำแปล</h3>
          {flashcards.map((flashcard, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label>คำศัพท์:</label>
                <input
                  type="text"
                  value={flashcard.term}
                  onChange={(e) => handleFlashcardChange(index, 'term', e.target.value)}
                  placeholder="กรอกคำศัพท์"
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>คำแปล:</label>
                <input
                  type="text"
                  value={flashcard.definition}
                  onChange={(e) => handleFlashcardChange(index, 'definition', e.target.value)}
                  placeholder="กรอกคำแปล"
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                  required
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFlashcard}
            style={{
              backgroundColor: '#007BFF',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            เพิ่มคำศัพท์
          </button>
        </div>

        {/* ปุ่มบันทึก */}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'กำลังบันทึก...' : 'บันทึกโฟลเดอร์และคำศัพท์'}
        </button>
      </form>
    </div>
  );
};

export default FlashcardFolderManager;
