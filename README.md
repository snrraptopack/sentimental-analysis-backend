# Sentiment Analysis Backend: Structuring Sentiment Feedback

## **Project Overview**

This backend system powers a **Sentiment Analysis Journal Tracker** by processing user journal entries to provide structured feedback. It utilizes AI to categorize sentiment, extract keywords, and generate concise titles, ensuring meaningful insights for each input.

---

## **Backend Stack**

- **Gemini AI API**: For natural language processing and sentiment analysis.

---

## **Features**

1. **Sentiment Analysis**:
   - Categorizes the sentiment of user journal entries into "Great," "Good," or "Bad."
2. **Keyword Extraction**:
   - Identifies key phrases or moments from the user’s text.
3. **Title Generation**:
   - Creates a concise and relevant title summarizing the user’s day.
4. **Structured Output**:
   - Delivers results in a JSON format for easy frontend integration.

---

## **How It Works**

### **1. Input Reception**:

- The backend receives a journal entry via an HTTP POST request.
- Example:
  ```json
  {
    "journal": "Missed the bus, spilled coffee, and argued with my boss."
  }
  ```

### **2. Processing Pipeline**:

- **Gemini AI API Integration**:
  - The input is sent to the Gemini AI API to analyze sentiment and extract key information.
- **Response Structuring**:
  - The API response is parsed to extract sentiment, title, and tags.
  - Example structured output:
    ```json
    {
      "status": "success",
      "message": {
        "sentiment": "Bad",
        "title": "Awful Day",
        "tags": [
          "missed bus",
          "spilled coffee",
          "argument with boss"
        ]
      }
    }
    ```

### **3. Response Delivery**:

- The structured JSON response is sent back to the frontend for rendering.

---

## **API Endpoints**

1. **POST /analyze-journal**:
   - Input: Journal entry text.
   - Output: Structured sentiment analysis results.
   - Example request and response:
     ```json
     Request:
     {
       "journal": "Missed the bus, spilled coffee, and argued with my boss."
     }

     Response:
     {
       "status": "success",
       "message": {
         "sentiment": "Bad",
         "title": "Awful Day",
         "tags": [
           "missed bus",
           "spilled coffee",
           "argument with boss"
         ]
       }
     }
     ```

---

## **Example Workflow**

1. **Input**:
   "I had a productive meeting and finished my project on time."

2. **Gemini AI API Output**:

   - Sentiment: Great
   - Title: Productive Day
   - Tags: ["productive meeting", "finished project"]

3. **JSON Response**:

   ```json
   {
     "status": "success",
     "message": {
       "sentiment": "Great",
       "title": "Productive Day",
       "tags": ["productive meeting", "finished project"]
     }
   }
   ```

---

## **Challenges Faced**

1. **API Response Delays**:
   - Mitigated using caching for frequent requests.
2. **Ambiguous Texts**:
   - Handled by providing default responses for vague inputs.
3. **Scalability**:
   - Ensured the backend can handle multiple concurrent requests using Flask’s threaded mode.

---

## **Future Improvements**

1. **Custom Sentiment Models**:
   - Train models for specific user groups or domains.
2. **Real-Time Feedback**:
   - Enable live sentiment analysis as users type.
3. **Enhanced Keyword Context**:
   - Provide detailed explanations for extracted tags.

---

## **Conclusion**

This backend is designed to seamlessly integrate with the frontend, delivering structured and insightful sentiment analysis. By leveraging the power of the Gemini AI API, it provides a robust foundation for expanding the journal tracker’s capabilities.

