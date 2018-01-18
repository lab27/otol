#!/usr/bin/env ruby

file = ARGV.first

require 'yaml'

data = YAML.load(File.read(file))

data = data.map do |entry|
  p entry
  puts cmd =  "identify -format '%wx%h' '#{entry['path']}'"

  entry['width'], entry['height'] = %x[#{cmd}].chomp.split('x')
  entry
end

File.open(file, 'w') do |f|
  f.write(YAML.dump(data))
end
