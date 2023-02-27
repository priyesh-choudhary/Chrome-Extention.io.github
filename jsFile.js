var btn = document.getElementById("button1");

btn.addEventListener("click", async function(){
   let [tab] = await chrome.tabs.query({active:true,currentWindow:true});

   chrome.scripting.executeScript({
    target:{tabId:tab.id},
    func:copyContent,
});
});

function copyContent()
{
    let content = document.body.innerHTML;
    navigator.clipboard.writeText(content);
    alert("Copied");
}

