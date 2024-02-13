const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');

const create = (firstName, lastName) => {
	const data = { firstName, lastName };
	console.log('Data Created:', data);
}

read();

const update = (id, firstName, lastName) => {
	const data = { firstName, lastName };
	console.log('Data Updated:', id, data);
}

const deleteData = (id) => {
	console.log('Data Deleted:', id);
}

let sortPosts = (sortType) => {
    let postsDiv = document.getElementById("");
    let divs = Array.from(postsDiv.getElementsByTagName(""));
    divs.sort((a, b) => {
      let pA = a.getElementsByTagName("")[0];
      let pB = b.getElementsByTagName("")[0];
      let textA = pA.innerText.toLowerCase();
      let textB = pB.innerText.toLowerCase();
  
      if (sortType === "asc") {
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      } else {
        return textA < textB ? 1 : textA > textB ? -1 : 0;
      }
    });
  };
