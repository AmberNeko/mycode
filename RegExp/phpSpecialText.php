<?php
$t = 'fsaafsdgafg/*-+.dddddd~!@$#%!$#%%^&*&(&*)ssssssss<>?><?,./.,/;dsfsdfsagadgfag';
$test = preg_replace_callback("/[\/\*\-\+\.\\\`\~\!\@\#\$\%\^\&\*\(\)\_\=\,\.\;\'\[\]\<\>\?\:\"\{\]\|]/", function ($match) {
    return $match = '';
}, $t);
echo $test;
?>
