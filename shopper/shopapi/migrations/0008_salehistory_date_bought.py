# Generated by Django 3.1 on 2020-09-04 06:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopapi', '0007_auto_20200904_1053'),
    ]

    operations = [
        migrations.AddField(
            model_name='salehistory',
            name='date_bought',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 4, 11, 51, 34, 263311)),
        ),
    ]
