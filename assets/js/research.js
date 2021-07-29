/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
   
    {
        title : "Data Analyst Roadmap",
        authors : "",
        conferences : "A brief Roadmap to become Data Analyst in 3 months.",
        researchYr : "Published in Medium.",
        citebox : "popup2",
        image : "assets/images/research-page/blog1.png",
        citation: {
            vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "https://medium.com/analytics-vidhya/data-analyst-roadmap-e8f9de05f93a",
        absbox: "absPopup2"
    },

    {
        title : "How to add Screenshot to Github readme file",
        authors : "",
        conferences : "A short tutorial blog on how to add Screenshot in readme file of Github",
        researchYr : "Published in Medium.",
        citebox : "popup3",
        image : "assets/images/research-page/blog2.png",
        citation: {
            vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "https://medium.com/analytics-vidhya/how-to-add-a-screenshot-in-your-github-readme-file-176afeb8ad86",
        absbox: "absPopup3"
    },
    
   
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <a class="button button-accent button-small text-right button-abstract "  href="${abstract}" target="_blank">
                            Read Blog
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <!--<button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>-->
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

