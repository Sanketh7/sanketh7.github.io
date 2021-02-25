$(document).ready(() => {
    $.getJSON('/resources/data.json', function (data) {
        $('#main-skills-list').empty();
        for (let i = 0; i < data.skills.length; i++) {
            $('#main-skills-list').append('<div class="skills-item">' + data.skills[i] + '</div>');
        }
        $('#projects').empty();
        for (let i = 0; i < data.projects.length; i++) {
            const name = data.projects[i].name;
            const description = data.projects[i].description;
            const skills = data.projects[i].skills;
            const github = data.projects[i].github;
            const url = data.projects[i].hasOwnProperty('url') ? data.projects[i].url : null;

            let skillsContent = '';
            for (let i = 0; i < skills.length; i++) {
                skillsContent += '<div class="skills-item">' + skills[i] + '</div>';
            }
            const content = `
            <div class="container pure-g">
                <div class="pure-u-1 pure-u-md-1-4">
                    <div class="container-title">${name}</div>
                    <div class="project-links">
                        <a href="${github}" class="icon-button">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                        ${url ? `<a href="${url}" class="icon-button"><i class="fas fa-link fa-2x"></i></a>` : ''}
                    </div>
                </div>
                <div class="pure-u-1 pure-u-md-3-4">
                    <div class="project-desc">${description}</div>
                    <div class="skills-list">${skillsContent}</div>
                </div>
            </div>
            `;

            $('#projects').append(content);
        }
    });
});

