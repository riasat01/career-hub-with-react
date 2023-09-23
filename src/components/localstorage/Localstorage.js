const getFromLocalStorage = () => {
    const storedJobApplication = localStorage.getItem(`job-application`);
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const setToLocalStorage = id => {
    // console.log(id)
    const storedJobApplications = getFromLocalStorage();
    const exist = storedJobApplications.find(jobId => {
        // console.log(jobId, id);
        return jobId === id
    });
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem(`job-application`, JSON.stringify(storedJobApplications));
    }
}

export {getFromLocalStorage, setToLocalStorage};