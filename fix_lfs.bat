git rm --cached public/models/character.glb
git commit --amend --no-edit
git push -u origin master > fix_push_log.txt 2>&1
