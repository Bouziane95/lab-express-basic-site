const elementSelected1 = document.querySelector(".part1");
const elementSelected2 = document.querySelector(".part2");
const elementSelected3 = document.querySelector(".part3");
let descriptiveParagraph = document.getElementById("paragraph-description");
var legacy =
  "Jordan's talent was clear from his first NBA season by November he was being compared to Julius Erving. Larry Bird said of the rookie Jordan that he was the best player he had ever seen and that Jordan was one of a kind and comparable to Wayne Gretzky as an athlete. In his first game in Madison Square Garden against the New York Knicks, Jordan received a standing ovation of almost one minute. After he scored a playoff record 63 points against the Boston Celtics on April 20, 1986, Bird described him as God disguised as Michael Jordan.";
var carrer =
  "Jordan played on two Olympic gold medal-winning American basketball teams. He won a gold medal as a college player in the 1984 Summer Olympics. The team was coached by Bob Knight and featured players such as Patrick Ewing, Sam Perkins, Chris Mullin, Steve Alford, and Wayman Tisdale. Jordan led the team in scoring, averaging 17.1 ppg for the tournament";
var philantropy =
  "From 2001 to 2014, Jordan hosted an annual golf tournament, the Michael Jordan Celebrity Invitational, that raised money for various charities.In 2006, Jordan and his wife Juanita pledged $5 million to Chicago s Hales Franciscan High School. The Jordan Brand has made donations to Habitat for Humanity and a Louisiana branch of the Boys & Girls Clubs of America. The Make-A-Wish Foundation named Jordan its Chief Wish Ambassador in 2008. Five years later, he granted his 200th wish for the organization. As of 2019, he has raised more than $5 million for the Make-A-Wish Foundation. In 2015, Jordan donated a settlement of undisclosed size from a lawsuit against supermarkets that had used his namee without permission to 23 different Chicago charities.Jordan funded two Novant Health Michael Jordan Family Clinics in Charlotte, North Carolina, in 2017 by giving $7 million, the biggest donation he had made at the time.";

let descriptionArray = [philantropy, carrer, legacy];

function changeParagraph(text) {
  descriptiveParagraph.innerHTML = text;
}

elementSelected1.onclick = () => {
  changeParagraph(descriptionArray[0]);
};

elementSelected2.onclick = () => {
  changeParagraph(descriptionArray[1]);
};

elementSelected3.onclick = () => {
  changeParagraph(descriptionArray[2]);
};
