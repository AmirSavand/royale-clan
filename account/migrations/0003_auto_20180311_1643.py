# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-11 16:43
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20180310_1624'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ['-id'], 'verbose_name': 'User', 'verbose_name_plural': 'Users'},
        ),
    ]
