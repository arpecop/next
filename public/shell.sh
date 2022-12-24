for PNG in *.png; do

  pngquant --ext .png --force 8 "$PNG"
  printf "Optimized PNG: %s\n" "$PNG"

done