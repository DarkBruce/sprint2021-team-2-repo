from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_not_negative(value):
    if value < 0:
        raise ValidationError(
            _('%(value)%s can not be negative'),
            params={'value': value},
        )