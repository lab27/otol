#!/usr/bin/env ruby

file, prefix = ARGV

require 'yaml'

data = YAML.load(File.read(file))

data = data.each_with_index.map do |entry, index|
  cmd = "identify -format '%wx%h' '#{prefix+entry['path']}'"
  entry['width'], entry['height'] = %x[#{cmd}].chomp.split('x')
  entry['preview'] = index < 12
  entry
end

File.open(file, 'w') do |f|
  f.write(YAML.dump(data))
end
