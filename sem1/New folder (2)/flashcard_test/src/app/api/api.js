const API_BASE_URL = 'http://localhost:8080';

export const api = {
  // Folders
  async getFolders(userId) {
    const response = await fetch(`${API_BASE_URL}/folders/user/${userId}`);
    return response.json();
  },

  async createFolder(folder) {
    const response = await fetch(`${API_BASE_URL}/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(folder),
    });
    return response.json();
  },

  async deleteFolder(id) {
    await fetch(`${API_BASE_URL}/folders/${id}`, {
      method: 'DELETE',
    });
  },

  // Flashcards
  async getFlashcards(folderId) {
    const response = await fetch(`${API_BASE_URL}/flashcards/folder/${folderId}`);
    return response.json();
  },

  async createFlashcard(flashcard) {
    const response = await fetch(`${API_BASE_URL}/flashcards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flashcard),
    });
    return response.json();
  },

  async updateFlashcard(id, flashcard) {
    const response = await fetch(`${API_BASE_URL}/flashcards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flashcard),
    });
    return response.json();
  },

  async deleteFlashcard(id) {
    await fetch(`${API_BASE_URL}/flashcards/${id}`, {
      method: 'DELETE',
    });
  },
};