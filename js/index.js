$(document).ready(() => {
    $.getJSON('/resources/data.json', function (data) {
        $('#main-skills-list').empty();
        for (let i = 0; i < data.skills.length; i++) {
            $('#main-skills-list').append('<div class="skills-item">' + data.skills[i] + '</div>');
        }
        $('#projects').empty();
        $.each(data.projects, function (key, value) {
            const name = key;
            const description = value.description;
            const skills = value.skills;
            const github = value.github;
            const url = value.hasOwnProperty('url') ? value.url : null;

            let skillsContent = '';
            for (let j = 0; j < skills.length; j++) {
                skillsContent += '<div class="skills-item">' + skills[j] + '</div>';
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
        });
    });
});

