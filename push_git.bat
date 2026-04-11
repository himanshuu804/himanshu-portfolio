git config lfs.allowincompletepush true
git branch > branch_log.txt
git remote -v > remote_log.txt
git push -u origin master > push_log.txt 2>&1
