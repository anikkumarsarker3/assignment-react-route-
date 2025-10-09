if (!localStorage.getItem('softList')) {
    localStorage.setItem('softList', JSON.stringify([]));
}

const getSoftware = () => {
    let softList = JSON.parse(localStorage.getItem('softList'));
    if (!softList) {
        softList = [];
        localStorage.setItem('softList', JSON.stringify(softList));
    }

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
        return true;
    }
    else {
        storeSoftwareData.push(id);
        const data = JSON.stringify(storeSoftwareData);
        localStorage.setItem('softList', data);
        return false;
    }
}

const removeSoftware = (id) => {
    const storeSoftwareData = getSoftware();
    if (storeSoftwareData.includes(String(id))) {
        const filtered = storeSoftwareData.filter(soft => Number(soft) !== Number(id))
        localStorage.setItem('softList', JSON.stringify(filtered));

    }
    else {
        alert('Data Not existed');
    }

}

export { getSoftware, addSoftware, removeSoftware }