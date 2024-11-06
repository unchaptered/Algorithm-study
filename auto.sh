

echo "" > README.md
echo "# Algorithm-study" >> README.md
echo "" >> README.md
echo "자바스크립트 알고리즘 공부" >> README.md
echo "" >> README.md
echo "| 제목 | 레벨 | 파일 | 날짜 |" >> README.md
echo "| --- | --- | -- | -- |" >> README.md

JS_DIRS=$(find "." -type f -name "*.js" | sort -u)
for JS_DIR in $JS_DIRS; do

    DATETIME=$(git log --diff-filter=A --format=%ad --date=short -- $JS_DIR)

    title=$(cat $JS_DIR | grep "//title:" | sed -n 's/.*\/\/title:\(.*\)/\1/p')
    level=$(cat $JS_DIR | grep "//level:" | sed -n 's/.*\/\/level:\(.*\)/\1/p')

    JS_FILE=$(basename $JS_DIR)

    echo "| $title | $level | [$JS_FILE]($JS_DIR) | $DATETIME |" >> README.md

done
