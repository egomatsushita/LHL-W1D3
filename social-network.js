var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function listEveryone() {
  var info = "";
  var friendsId = Object.keys(data);
  var totalFollowFriends = [];
  var totalFollowByFriends = [];
  var whoFollowsMostPeople = "";
  var whoHasTheMostFollowers = "";
  // var friends = [];
  // for (var key of keys) {
  //   friends.push(data[key]['name']);
  // }
  // console.log(friends);
  var index = 0;
  for(var id in data) { // f01 - f06
    var countFollowers = 0;

    info += `*** ${data[id]['name']} ***\n`;
    info += `  # Follows:\n`;

    for(var followers of data[id]['follows']) {  // retrieve array of follows
      info += `    - ${data[followers]['name']}\n`;
      countFollowers++;
      totalFollowFriends[index] = countFollowers;
    }
    info += `  # Followed by:\n`;

    countFollowers = 0;
    for (var key in data) {
      for(var followers of data[key]['follows']) {
        if (followers == id) {
          info += `    - ${data[key]['name']}\n`;
          countFollowers++;
          totalFollowByFriends[index] = countFollowers;
        }
      }
    }
    // console.log(friendsId);
    // console.log(totalFollowFriends);
    // console.log(totalFollowByFriends);
    index++;
    info += "\n";
  }

  var maxFriends =  Math.max.apply(this, totalFollowFriends);

  totalFollowFriends.map(function(element, index, array) {
    if (element === maxFriends) {
      var dataKey = friendsId[index];
      whoFollowsMostPeople += data[dataKey]['name'];
    }
  });

  info += `${whoFollowsMostPeople} follows the most people\n`;

  maxFriends =  Math.max.apply(this, totalFollowByFriends);

  totalFollowByFriends.map(function(element, index, array) {
    var dataKey = "";
    if (element === maxFriends) {
      dataKey = friendsId[index];
      whoHasTheMostFollowers += data[dataKey]['name'] + ", ";
    }
  });

  info += `${whoHasTheMostFollowers} has the most followers`;

  return info;
}

console.log(listEveryone());





