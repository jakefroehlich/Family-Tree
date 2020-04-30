class FamilyTree {
  constructor (first) {
    if (first == undefined || typeof first != 'string'){
      throw Error;
    }
    this.node = this;
    this.size = 1;
    this.value = first;
    this.children = [];
  }

  familySize() {
    return this.size;
  }

  findMember(searchName) {
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
  
      if (child.value == searchName) {
        return child;
      }
      else if (child.children.length > 0) {
        return this.node.findMember.call(child, searchName);
      };
    };
  }

  log() {
    let treelog = `-- ${this.value} \n`

    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i];

      if (child.children.length > 0) {
        treelog += `---- ${child.value} \n`;

        for (let j = 0; j < child.children.length; ++j) {
          let subchild = child.children[j];

          treelog += `------ ${subchild.value}`;
        }
      }
    }

    return treelog;
  }


  insert(name) {
    this.node.size++;
    const child = new FamilyTree(name);
    this.node.children.push(child);
  }
}

module.exports = FamilyTree;
