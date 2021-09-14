const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

export const postSurveyToDB = (data: any) => {
      try {
        return fetch(`${apiUrl}/answer`, {
          headers: { apiKey, 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          method: 'POST',
});
      } catch ({ message }) {
        return console.log(message);
      }
};

export const fetchQuestions = (blockNumber: number) : any => {
    try {
        return fetch(`${apiUrl}/question?question_block=eq.${blockNumber}&select=question_type, id, question, project_id, question_category, given_answer(choices1, choices2)`, { headers: { apiKey } });
      } catch ({ message }) {
        return console.log(`ERROR${message}`);
      }
};

export const fetchPatientId = (code : number) : any => {
  try {
    return fetch(`${apiUrl}/patient?id=eq.${code}`, { headers: { apiKey } });
  } catch ({ message }) {
    return console.log(message);
  }
};
