useEffect(() => {
    if (userInfo.code) {
      try {
        fetch(`${apiUrl}/patient?id=eq.${getPatientId(userInfo.code)}`, { headers: { apiKey } })
          .then((res) => res.json())
          .then((data) => {
            if (data.length) {
             setPatientId(data[0].id);
            } else {
              console.log('PATIENTE INEXISTENTE');
            }
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [userInfo]);
