'use client';

import { useState, useEffect } from 'react';
import { api } from './api/api';

export default function Home() {
  // Mock user ID (should come from authentication)
  const userId = "user123";
  
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const [newFolder, setNewFolder] = useState({ name: '', description: '' });
  const [newCard, setNewCard] = useState({
    question: '',
    answer: '',
    category: '',
    difficultyLevel: 1
  });

  useEffect(() => {
    loadFolders();
  }, []);

  useEffect(() => {
    if (selectedFolder) {
      loadFlashcards(selectedFolder.id);
    }
  }, [selectedFolder]);

  const loadFolders = async () => {
    const userFolders = await api.getFolders(userId);
    setFolders(userFolders);
  };

  const loadFlashcards = async (folderId) => {
    const cards = await api.getFlashcards(folderId);
    setFlashcards(cards);
    setCurrentCard(cards[0] || null);
  };

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    const folder = await api.createFolder({
      ...newFolder,
      userId
    });
    setFolders([...folders, folder]);
    setNewFolder({ name: '', description: '' });
  };

  const handleCreateFlashcard = async (e) => {
    e.preventDefault();
    if (!selectedFolder) return;
    
    const flashcard = await api.createFlashcard({
      ...newCard,
      folderId: selectedFolder.id
    });
    setFlashcards([...flashcards, flashcard]);
    setNewCard({
      question: '',
      answer: '',
      category: '',
      difficultyLevel: 1
    });
  };

  const nextCard = () => {
    const currentIndex = flashcards.findIndex(card => card.id === currentCard?.id);
    const nextIndex = (currentIndex + 1) % flashcards.length;
    setCurrentCard(flashcards[nextIndex]);
    setShowAnswer(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Flashcard App</h1>
      
      {/* Folder Management */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Folders</h2>
        
        {/* Create Folder Form */}
        <form onSubmit={handleCreateFolder} className="mb-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Folder Name"
              value={newFolder.name}
              onChange={(e) => setNewFolder({...newFolder, name: e.target.value})}
              className="flex-1 p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={newFolder.description}
              onChange={(e) => setNewFolder({...newFolder, description: e.target.value})}
              className="flex-1 p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Create Folder
            </button>
          </div>
        </form>
        
        {/* Folder List */}
        <div className="grid grid-cols-3 gap-4">
          {folders.map(folder => (
            <div
              key={folder.id}
              onClick={() => setSelectedFolder(folder)}
              className={`p-4 rounded-lg border cursor-pointer ${
                selectedFolder?.id === folder.id ? 'bg-blue-100 border-blue-500' : 'bg-white'
              }`}
            >
              <h3 className="font-bold">{folder.name}</h3>
              <p className="text-sm text-gray-600">{folder.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selectedFolder && (
        <>
          {/* Study Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Study: {selectedFolder.name}
            </h2>
            {currentCard ? (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl mb-4">Question:</h3>
                <p className="mb-4">{currentCard.question}</p>
                
                {showAnswer ? (
                  <>
                    <h3 className="text-xl mb-4">Answer:</h3>
                    <p className="mb-4">{currentCard.answer}</p>
                    <p className="mb-4 text-sm text-gray-600">
                      Category: {currentCard.category} | 
                      Difficulty: {currentCard.difficultyLevel}
                    </p>
                  </>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Show Answer
                  </button>
                )}
                
                {showAnswer && (
                  <button
                    onClick={nextCard}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
                  >
                    Next Card
                  </button>
                )}
              </div>
            ) : (
              <p>No flashcards in this folder</p>
            )}
          </div>
          
          {/* Create Flashcard Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Create New Flashcard</h2>
            <form onSubmit={handleCreateFlashcard} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Question:</label>
                <input
                  type="text"
                  value={newCard.question}
                  onChange={(e) => setNewCard({...newCard, question: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Answer:</label>
                <textarea
                  value={newCard.answer}
                  onChange={(e) => setNewCard({...newCard, answer: e.target.value})}
                  className="w-full p-2 border rounded min-h-[100px]"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Category:</label>
                <input
                  type="text"
                  value={newCard.category}
                  onChange={(e) => setNewCard({...newCard, category: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Difficulty Level (1-5):</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={newCard.difficultyLevel}
                  onChange={(e) => setNewCard({...newCard, difficultyLevel: Number(e.target.value)})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Create Flashcard
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}