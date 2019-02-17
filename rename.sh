for f in src/scripts/*/*.jsx; do 
       mv -- "$f" "${f%.jsx}.js"
    done
