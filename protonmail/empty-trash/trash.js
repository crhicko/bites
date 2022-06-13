function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteAll() {
    while (true) {
        document.getElementById("idSelectAll").click()
        await sleep(3000);

        document.querySelector('[data-testid="toolbar:deletepermanently"]').click()
        await sleep(1000);

        document.querySelector('button[data-testid="permanent-delete-modal:submit"]').click()
        await sleep(10000)
    }
}

// RUN
deleteAll()