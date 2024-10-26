document.getElementById('fetchModButton').addEventListener('click', () => {
  const modId = document.getElementById('modId').value;
  if (modId.trim() === "") {
    alert('Please enter a valid Mod ID.');
  } else {
    fetchMod(modId);
  }
});

const fetchMod = (modId) => {
  fetch("https://api.ageofempires.com/api/v1/mods/Download", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: modId, boolValue: true }),
    method: "POST",
    mode: "cors"
  })
  .then(response => response.json())
  .then(data => {
    if (data.value && data.value.downloadUrl) {
      window.open(data.value.downloadUrl, '_blank');
    } else {
      alert('Failed to fetch download URL.');
    }
  })
  .catch(error => console.error('Error:', error));
};
