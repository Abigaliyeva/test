// Функция для отправки запроса к API Pipedrive
function sendRequestToPipedriveAPI(deal) {
    // Использование fetch для отправки POST-запроса:
    fetch("https://api.pipedrive.com/v1/deals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(deal),
    })
        .then((response) => {
            // Обработка ответа от API Pipedrive
            if (response.ok) {
                console.log("Запрос к API Pipedrive выполнен успешно.");
            } else {
                console.log("Ошибка при выполнении запроса к API Pipedrive.");
            }
        })
        .catch((error) => {
            console.log("Ошибка при выполнении запроса к API Pipedrive: " + error);
        });
}

// const input = document.createElement("input");
// input.setAttribute("type", "text");
// input.setAttribute("id", "test2");
// const text = input.value

// Загрузка страницы со встроенным iframe
window.onload = function () {
    var iframe = document.getElementById("myIframe");
    // iframe.src = "https://doc.clickup.com/36925455/p/h/136w0f-58802/2c5d002c981d8c4";
    iframe.src = "https://shallow-deposit.pipedrive.com/";

    // Обработчик события загрузки iframe
    iframe.onload = function () {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const inputInfo = iframeDocument.getElementById("test2").value;
        const pipedriveDeal = {
            title: "Title Deal",
            inputInfo: inputInfo,
        };
        sendRequestToPipedriveAPI(pipedriveDeal);
    };
};
