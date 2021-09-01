const getPatientId = (code : string) => {
    const regex = /[0-9]/g;
    const result: RegExpMatchArray | null = code.match(regex);
    return result ? Number(result.join('')) : -1;
};

export default getPatientId;
