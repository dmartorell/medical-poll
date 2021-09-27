const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

export const postSurveyToDB = async (data: any) => {
  const response = await fetch(`${apiUrl}/answer`, {
      headers: { apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      method: 'POST',
      });
      if (!response.ok) {
        const message:string = `Something went wrong: ${response.status}`;
        throw new Error(message);
      }
};

export const fetchQuestions = (blockNumber: number) : any => {
    try {
        return fetch(`${apiUrl}/question?question_block=eq.${blockNumber}&select=question_type, id, hasAscChoicesValues, question, project_id, question_category, given_answer(choices1, choices2)&order=id.asc`, { headers: { apiKey } });
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
