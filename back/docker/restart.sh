DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

"$DIR/stop.sh"
rm -f "$DIR/../logs/"*.log
"$DIR/start.sh"
