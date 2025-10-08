const getSoftware = () => {
    const storeSoftware = localStorage.getItem('softList');
    if (storeSoftware) {
        const storeSoftwareData = JSON.parse(storeSoftware);
        return storeSoftwareData;
    }
    else {
        return [];
    }
}
const addSoftware = (id) => {
    const storeSoftwareData = getSoftware();
    if (storeSoftwareData.includes(id)) {
        // alert("already existed");
        return true;
    }
    else {
        storeSoftwareData.push(id);
        const data = JSON.stringify(storeSoftwareData);
        localStorage.setItem('softList', data);
        // alert("NOOOOOOOOOO existed");
        return false;
    }
}

const removeSoftware = (id) => {
    const storeSoftwareData = getSoftware();
    if (storeSoftwareData.includes(String(id))) {
        console.log(storeSoftwareData)
        const filtered = storeSoftwareData.filter(soft => Number(soft) !== Number(id))
        localStorage.setItem('softList', JSON.stringify(filtered));

    }
    else {
        alert('Data Not existed');
    }

}

export { getSoftware, addSoftware, removeSoftware }