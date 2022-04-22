const form = document.querySelector('#myForm');
const main = document.querySelector('main');

const friendList = {
  "friends": [{
      "steamid": "76561197960430929",
      "relationship": "friend",
      "friend_since": 1486338170
    },
    {
      "steamid": "76561197962297457",
      "relationship": "friend",
      "friend_since": 1485227275
    },
    {
      "steamid": "76561197977344631",
      "relationship": "friend",
      "friend_since": 1484606628
    }
  ]
}

console.log(form);
console.log(form.elements["say"]);

function validate() {
  const say = form.elements["say"].value;
  const to = form.elements["to"].value;
  if (say && to) {
    return !!say.trim() && !!to.trim();
  }
}

form.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  if (validate()) {
    functionCreateElement();
    // form.submit();
  }

});

function someFunction() {
  console.log("someFunction");
}

function fetchData() {
  console.log("fetchData");
}

function functionCreateElement() {
  const wrapper = document.createElement('div');
  // wrapper.classList.add('wrapper12');
  wrapper.setAttribute("tabIndex", "0");
  wrapper.ariaLabel = "wrapper";
  wrapper.className = "wrapper wrapper2 wrapper3";
  friendList.friends.forEach(friend => {
    const newElement = document.createElement('div');
    newElement.innerHTML = `${friend.steamid}`;
    wrapper.appendChild(newElement);
    // wrapper.appendChild(document.createElement('div').textContent = `${friend.steamid} ${friend.relationship} ${friend.friend_since}`);
  });
  main.appendChild(wrapper);

}

// relationship: "friend" 
// date: