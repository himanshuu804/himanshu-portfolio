const { execSync } = require('child_process');
const fs = require('fs');

let log = '';
function run(cmd) {
    try {
        log += `> ${cmd}\n`;
        const out = execSync(cmd, { encoding: 'utf8' });
        log += `${out}\n`;
    } catch (e) {
        log += `ERROR: ${e.message}\nSTDOUT: ${e.stdout}\nSTDERR: ${e.stderr}\n`;
    }
}

run('git --version');
run('"C:\\Program Files\\GitHub CLI\\gh.exe" auth status');
run('git config user.name "Himanshu"');
run('git config user.email "himanshu@portfolio.local"');
run('git init');
run('git add .');
run('git commit -m "Initial commit"');
run('"C:\\Program Files\\GitHub CLI\\gh.exe" repo create himanshu-portfolio --public --source=. --remote=origin --push');

fs.writeFileSync('git_automation_log.txt', log);
