function (pixelCount) {
    width = 10
    var map = []
    for (i = 0; i < pixelCount; i++) {
      y = Math.floor(i / width)
      x = i % width
      map.push([x, y])
    }
    return map
  }