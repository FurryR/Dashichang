





class _1734
{
	_1735;
	_1736;
	_620;
}
class _1737
{
	_1738;
	_1739;
	_874;
	_620=-1;
}
class _617
{
	static _1740 = true;
	static _1741 = false;
	static _1742 = new Array();
	static _1743 = new _1737();
	static _1744 = false;
	static _1745(_620)
	{
		let _1746;
		_1746 = _617._1742;
		for (let _1747 = 0; _1747 < _1746.length; _1747++)
		{
			let _1564;
			_1564 = _1746[_1747];
			if (_620 == -1 || _620 == _1564._620)
			{
				if (_1564._1735 == "_7739")
				{
					_1746.splice(_1747, 1);
					_1747--;
				}
			}
		}
    }
	static _1748(_620)
	{
		let _1746;
		_1746 = _617._1742;
		for (let _1747 = 0; _1747 < _1746.length; _1747++)
		{
			let _1564;
			_1564 = _1746[_1747];
			if (_620 == -1 || _620 == _1564._620)
			{
				if (_1564._1735 == "_7740")
				{
					_1746.splice(_1747, 1);
					_1747--;
				}
			}
		}
	}
	static _240()
	{
		_617._1745(-1);
		let _1749;
		_1749 = new _1734();
		_1749._1735 = "_7739";
		_1749._1736 = "_7623";
		_1749._620 = -1;
		_617._1742.push(_1749);
		_617._1626();
		_617._865();
	}
	static _1054()
	{
		_617._1745(-1);
		let _1749;
		_1749 = new _1734();
		_1749._1735 = "_7739";
		_1749._1736 = "_368";
		_1749._620 = -1;
		_617._1742.push(_1749);
		_617._1626();
		_617._865();
	}
	static _419(_620)
	{
		let _1750, _1751, _1752;
		[_1750, _1751, _1752] = this._1753(_620)
		if (_1750)
		{
			
			return;
		}
		_617._1745(_620);
		let _445;
		_445 = _585[_620];
		_445._1754();
		let _1749;
		_1749 = new _1734();
		_1749._1735 = "_7739";
		_1749._1736 = "_7623";
		_1749._620 = _620;
		_617._1742.push(_1749);
		_617._1626();
		_617._865();
		_617._618()
	}
	static _922(_620)
	{
		let _1750, _1751, _1752;
		[_1750, _1751, _1752]=this._1753(_620)
		if (_1751)
		{
			
			return;
		}
		_617._1745(_620);
		let _1749;
		_1749 = new _1734();
		_1749._1735 = "_7739";
		_1749._1736 = "_368";
		_1749._620 = _620;
		_617._1742.push(_1749);
		_617._1626();
		_617._865();
		_617._618()
	}
	static _897(_620)
	{
		_617._1744 = false;
		setTimeout(_617._1626(), 100);
	}
	static _911(_909, _910, _874, _620)
	{
		let _1750, _1751, _1752;
		[_1750, _1751, _1752] = _617._1753(_620);
		if (_1751)
			return;

		let _1755 = _617._1743;
		_1755._1738= _909;
		_1755._1739 = _910;
		_1755._874 = _874;
		_1755._620 = _620;
		_617._1756();
	}
	static _1757()
	{
		if (this._1740)
		{
			this._1758++;
			if (this._1758 > 10)
			{
				this._1741 = true;
				this._1055(false);
			}
			setTimeout(function () { this._1758 = 0; }, 10 * 1000);
		}
	}
	static _898(_620)
	{
		_617._1743._620 = -1;
		if (_620 == -1)
			return;
		_617._1745(_620);
		_617._1748(_620);
		_617._1626();
		_617._865();
		_129._837(0, 100);
		_617._618();
		if (this._1741)
		{
			this._1741 = false;
			this._1055(true);
		}
	}
	static _907(_620)
	{
		_617._1743._620 = -1;
		if (_620 == -1)
			return;
		_617._1745(_620);
		_617._1748(_620);
		_617._1626();
		_617._865();
		_617._618();
		this._1757();
	}
	static _906(_620)
	{
		_617._1743._620 = -1;
		if (_620 == -1)
		{
			let _1746;
			_1746 = _617._1742;
			for (let _1747 = 0; _1747 < _1746.length; _1747++)
			{
				let _1564;
				_1564 = _1746[_1747];
				if (_1564._1736 == "_368")
				{
					_620 = _1564._620;
					break;
				}
			}
			if (_620 == -1)
				return;
		}
		_617._1745(_620);
		_617._1748(_620);
		_129._837(0, 100);
		_617._1626();
		_617._865();
		_617._618();
	}
	static _1759(_1760)
	{
		let _1746;
		_1746 = _617._1742;
		for(let _1761=0;_1761<_1746.length;_1761++)
			if(_1746[_1761]._620==_1760)
			{
				_1746.splice(_1761,1);
				break;
			}
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._620 > _1760)
				_1763._620--;
		}
		_617._865();
	}
	static _1764(_1765)
	{
		let _1746;
		_1746 = _617._1742;
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._620 >= _1765)
				_1763._620++;
		}
		_617._865();
		_617._618()
	}
	static _1766()
	{
		let _1746;
		_1746 = _617._1742;
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._1735 == "_7740" && _1763._1736 == "_7623")
				return _1763._620;
		}
		return -1;
	}
	static _619(_620)
	{
		let _1767;
		_1767 = this._1766();
		if (_1767 != -1)
			_617._922(_1767);
		if (_620 != _1767)
			_617._922(_620);
		_617._865();
		_617._618()
	}
	static _1758=0;
	static async _1768(_445, _620)
	{
		
		

		let _1681 = _445._1164;
		if (_1681.length == 0)
			return "";
		let _1769;
		_1769 = "";
		let _1770;
		_1770 = 0;
		let _1771;
		_1771 = 0;
		for (let _1578 = 0; _1578 < _1681.length; _1578++)
		{
			let _455 = _1681[_1578];
			let _358 = _455._1621;
			let _1772 = _358._1773;
			for (let _1774 = 0; _1774 < 4; _1774++)
			{
				let _1775;
				switch (_1774)
				{
					case 0: _1775 = _1772._1776; break;
					case 1: _1775 = _1772._1777; break;
					case 2: _1775 = _1772._1778; break;
					case 3:
						{
							let _1779;
							_1779 = _1772._1780;
							if (_1779._1781)
								_1775 = [_1779];
							else
								_1775 = [];
						}
						break;
				}
				for (let _1782 = 0; _1782 < _1775.length; _1782++)
				{
					let _305 = _1775[_1782];
					for (let _1783 = 0; _1783 < 5; _1783++)
					{
						let _331;
						switch (_1783)
						{
							case 0: _331 = _305._1784; break;
							case 1: _331 = _305._1785; break;
							case 2: _331 = _305._1786; break;
							case 3: _331 = _305._1787; break;
							case 4: _331 = _305._1788; break;
						}
						if (_331)
						{
							_1771++;
							_1770 += _331.charCodeAt(0) * _1771;
							if (_1769.indexOf(_331) == -1)
								_1769 += _331;
						}
                    }
                }
            }
        }
		
		
		let _1305;
		_1305 = "TSSGetParameter.aspx?";
		_1305 += "ipa=" + encodeURIComponent(_1769)+"&";
		_1305 += "checksum=" + _1770+"&";

		_1305 += "formant_width=";
		let _1789;
		_1789 = "high_order_formant=";
		for (let _657 = 0; _657 < _658._659; _657++)
		{
			let _1790;
			_1790 = _445._1153[_657];
			let _456;
			_456 = _39.contentWindow._1791(_1790);
			if (!_456)
				_456 = _39.contentWindow._1792()[0];
			{
				let _1793;
				_1793 = _456._1794;
				if (_1793 > 2)
					_1793 = 2;
				_1305 += _1793;
			}
			_1789 += _456._1795;
			if (_657 != _658._659 - 1)
			{
				_1305 += ",";
				_1789 +=","
			}
		}
		_1305 += "&";
		_1305 += _1789;
		_1305 += "&";

		_1305 += "line=" + (_620 + 1) + "-" + _585.length;

		let _987;
		try
		{
			let _1510;
			_1510 = await fetch(_1305);
			_987 = await _1510.text();
		}
		catch (_678)
		{
			_987 = null;
		}
		if (_1769.length)
			if (!_987)
				_987 = null;
		return _987;
    }
	static async _1796(_620)
	{
		
		
		
		let _1797;
		_1797 = _584;
		_584 = _620;
		let _891;
		_891 = _644("_7688");
		_584 = _1797;
		let _445;
		_445 = _585[_620];
		_445._899 = "";
		let _876;
		_876 = _595._1626(_620);
		if (_876 == null)
		{
			
			_445._899 = "Can not get modifying musica.";
			_617._1744 = false;
			setTimeout(_617._1626(), 100);
			return false;
		}
		let _646;
		_646 = await _617._1768(_445, _620);
		if (_646 === null)
		{
			this._1757();
			_445._899 = "get tts parameter error.";
			_617._1745(_620);
			_617._1748(_620);
			_617._865();
			_617._1744 = false;
			setTimeout(_617._1626(), 100);
			return false;
		}
		if (!_847._419(_445._895() + _445._896(), _620, _891, _876, _646))
		{
			this._1757();
			
			_445._899 = "c++ error.";
			_617._1745(_620);
			_617._1748(_620);
			_617._865();
			_617._1744 = false;
			setTimeout(_617._1626(), 100);
			return false;
		}
		
		return true;
	}
	static _1626()
	{
		if (_617._1744)
			return;

		
		let _1746;
		_1746 = _617._1742;

		let _1798,_1799;
		_1798 = false;
		_1799 = false;
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._1735 == "_7740")
			{
				_1798 = true;
				break;
            }
		}
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._1735 == "_7740" && _1763._1735 == "_368")
			{
				_1799 = true;
				break;
			}
		}
		if (_1799)
			return;

		let _1800, _1801;
		_1801 = -1;
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if ((_1763._1735 != "_7739"))
				continue;
			if (_1763._620 != -1)
			{
				if (_1763._1736 == "_7623" && !_1798)
				{
					let _1802;
					_1802 = true;
					if (_1763._620 < 0 || _1763._620 >= _585.length)
						_1802 = false;
					if (_1802)
					{
						let _445;
						_445 = _585[_1763._620];
						if (_1011._1803(_445))
							_1802 = false;
					}
					_1746.splice(_1762, 1);
					if (_1802)
					{
						_1800 = _1763._1736;
						_1801 = _1763._620;
						break;
					}
				}
				else if (_1763._1736 == "_368" && !_1799)
				{
					
					for (let _1804 = 0; _1804 < _1746.length; _1804++)
					{
						let _1805 = _1746[_1804];
						if (_1805._1735 == "_7740" && _1805._1736 == "_7623" && _1805._620 == _1763._620)
						{
							_1746.splice(_1762, 1);
							_1800 = _1763._1736;
							_1801 = _1763._620;
							break;
						}
					}				
					
					{
						let _1806;
						_1806 = false;
						for (let _1804 = 0; _1804 < _1762; _1804++)
						{
							let _1805 = _1746[_1804];
							if (_1805._1735 == "_7739" && _1805._1736 == "_7623" && _1805._620 == -1)
							{
								_1806 = true;
								break;
							}
						}
						if (_1806)
							continue;
					}
					
					_1746.splice(_1762, 1);
                }
			}
			else
			{
				if (_1763._1736 == "_7623" && !_1798)
				{
					
					for (let _1807 = 0; _1807 < _585.length; _1807++)
					{
						let _445;
						_445 = _585[_1807];
						if (!_1011._1803(_445))
						{
							
							let _1808;
							_1808 = false;
							for (let _1804 = _1762 + 1; _1804 < _1746.length; _1804++)
							{
								let _1805 = _1746[_1804];
								if (_1805._1735 == "_7739" && (_1805._620 == _1807 || _1805._620 ==-1))
								{
									if (_1805._1736 == "_368")
										_1808 = true;
									else if (_1805._1736 == "_7623")
										_1808 = false;
								}
							}
							if (_1808)
								continue;
							_1800 = "_7623";
							_1801 = _1807;
							break;
                        }
					}
					if (_1801 == -1)
					{
						_1746.splice(_1762, 1);
						break;
					}
				}
				else if (_1763._1736 == "_368" && !_1799)
				{
					for (let _1804 = 0; _1804 < _1746.length; _1804++)
					{
						let _1805 = _1746[_1804];
						if (_1805._1735 == "_7740" && _1805._1736 == "_7623" && _1805._620 != -1)
						{
							_1800 = "_368";
							_1801 = _1805._620;
                        }
					}						
					_1746.splice(_1762, 1);
					if (_1801 == -1)
						break;
				}
            }
		}
		if (_1801 == -1)
			return;

		

		if (_1800 == "_7623")
		{
			_617._1744 = true;
			if (!_617._1796(_1801))
				return;
		}
		else
		{
			if (!_847._922(_1801))
				return;
		}
		_617._1745(_1801);
		let _1749;
		_1749 = new _1734();
		_1749._1735 = "_7740";
		_1749._1736 = _1800;
		_1749._620 = _1801;
		_1746.push(_1749);
	}
	static _1809()
	{
		let _1746;
		_1746 = _617._1742;
		
		
		if (_1746.length)
		{
			
			_77.style.display = "none";
			_78.style.display = "inline-block";
			let _1810;
			_1810 = false;
			for (let _1762 = 0; _1762 < _1746.length; _1762++)
			{
				let _1763 = _1746[_1762];
				if (_1763._1736 == "_7623")
				{
					_1810 = true;
					break;
                }
			}
			if (_1810)
			{
				let _1811;
				_1811 = false;
				for (let _1762 = 0; _1762 < _1746.length; _1762++)
				{
					let _1763 = _1746[_1762];
					if (_1763._1736 == "_368" && _1763._620 == -1)
					{
						_1811 = true;
						break;
					}
				}
				let _1812;
				_1812 = false;
				for (let _1807 = 0; _1807 < _585.length; _1807++)
				{
					let _1750, _1751, _1752;
					[_1750, _1751, _1752] = _617._1753(_1807);
					if ((_1750 && (!_1751)) || _1752)
					{
						_1812 = true;
						break;
					}
				}
				if (_1811 || (!_1812))
					_581._582(_78, false);
				else
					_581._582(_78, true);
			}
			else
			{
				_581._582(_78, false);
            }
		}
		else
		{
			
			_77.style.display = "inline-block";
			_78.style.display = "none";
			let _1813;
			_1813 = false;
			for (let _1807 = 0; _1807 < _585.length; _1807++)
			{
				let _445;
				_445 = _585[_1807];
				if (_445._1164.length)
				{
					if (!_1011._1803(_445))
					{
						_1813 = true;
						break;
					}
				}
			}
			if (_1813)
			{
				let _1814;
				_1814 = false;
				for (let _1762 = 0; _1762 < _1746.length; _1762++)
				{
					let _1763 = _1746[_1762];
					if (_1763._1736 == "_7623" && _1763._620 == -1)
					{
						_1814 = true;
						break;
					}
				}
				if (_1814)
					_581._582(_77, false);
				else
					_581._582(_77, true);
			}
			else
			{
				_581._582(_77, false);
            }
        }
		if (!_847._848())
		{
			_581._582(_77, false);
			_581._582(_78, false);
		}
	}
	static _1815()
	{
		for (let _620 = 0; _620 < _585.length; _620++)
		{
			if (_620 == _584)
				continue;
			_617._1816(
				_620,
				document.getElementById("_125" + _620),
				document.getElementById("_129" + _620), null,
				document.getElementById("_130" + _620),
				document.getElementById("_133" + _620),
				document.getElementById("_134" + _620),
				document.getElementById("_137" + _620), null,
				null,
				document.getElementById("_139" + _620),false);
		}
	}
	static _1817()
	{
		if (_584 == -1)
			return;
		_617._1816(
			_584,
			_125,
			_129, _127,
			_130,
			_133,
			_134,
			_137, _138,
			_124,
			_139,true);
	}
	static _1753(_620)
	{
		let _1746;
		_1746 = _617._1742;
		let _1750, _1751, _1752;
		_1750 = _1751 = _1752 = false;
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._1735 == "_7740" && _1763._1736 == "_7623" && (_1763._620 == _620 || _1763._620 == -1))
				_1750 = true;
			if (_1763._1735 == "_7740" && _1763._1736 == "_368" && (_1763._620 == _620 || _1763._620 == -1))
				_1751 = true;
		}
		for (let _1762 = 0; _1762 < _1746.length; _1762++)
		{
			let _1763 = _1746[_1762];
			if (_1763._1735 != "_7739")
				continue;
			if (_1763._620 != _620 && _1763._620 != -1)
				continue;
			if (_1763._620 == -1)
				if (_1011._1803(_923._445))
					continue;
			if (_1763._1736 == "_7623")
				_1752 = true;
			if (_1763._1736 == "_368")
				_1752 = false;
		}
		return [_1750, _1751, _1752];
    }
	static _1816(_620, _125, _129, _1818, _130, _133, _134, _137, _1819, _1820, _139, _1821)
	{
		if (!_923._924(_620))
			return;

		
		
		let _1750, _1751, _1752;
		[_1750, _1751, _1752] = _617._1753(_620);
		if (_1821 && this._1740)
			if (!_1011._1803(_923._445))
				_1750 = true;
		

		if (_1750 || _1751 || _1752)
		{
			_125.style.display = "";
			if (_1750 && (!_1751))
			{
				_129.style.display = "inline-block";
				_129._967(true);
				if (_1818)
					_1818.style.display = "";
				_130.style.display = "inline-block";
			}
			else
			{
				if (_1821 && this._1740)
				{
					_129.style.display = "inline-block";
					_129._967(false);
					if (_1818)
						_1818.style.display = "";
				}
				else
				{
					_129.style.display = "none";
					if (_1818)
						_1818.style.display = "none";
				}
				_130.style.display = "none";
			}
			if ((!_1750) && (!_1751) && _1752)
				_133.style.display = "inline-block";
			else
				_133.style.display = "none";
			if (_1751 && (!_1752))
				_134.style.display = "inline-block";
			else
				_134.style.display = "none";
			_137.style.display = "none";
			if (_1819)
				_1819.style.display = "none";
			if (_1820)
				_1820.style.display = "none";
			_139.style.display = "none";
		}
		else
		{
			if (_125)
				_125.style.display = "none";
			if (_923._1822 == "")
			{
				if (_137)
					_137.style.display = "none";
				if (_1819)
					_1819.style.display = "none";
			}
			else
			{
				if (_137)
					_137.style.display = "inline-block";
				if (_1819)
					_1819.style.display = "";
			}
			if (_1011._1803(_923._445))
			{
				if (_1820)
					_1820.style.display = "none";
				if (_139)
					_139.style.display = "inline-block";
			}
			else
			{
				if (_1820)
				{
					if (_923._1822 == "")
						_1820.style.display = "inline-block";
					else
						_1820.style.display = "none";
				}
				if (_139)
					_139.style.display = "none";
			}
		}
		let _415;
		_415 = _847._848();
		
		
		if (_130)
			_581._582(_130, _415);
		if (_133)
			_581._582(_133, _415);
		if (_134)
			_581._582(_134, _415);
		if (_137)
			_581._582(_137, _415);
		if (_1820)
			_581._582(_1820, _415);
    }
	static _1756()
	{
		let _1755 = _617._1743;
		let _445;
		_445 = _847._894(_1755._874, _1755._620);
		if (_445 == null)
			return;
		let _1160;
		if (_1755._620 == _584)
			_1160 = _129;
		else
			_1160 = document.getElementById("_129" + _1755._620);
		if (_1160)
			_1160._837(_1755._1738, _1755._1739);
    }
	static _865()
	{
		_617._1809();
		_617._1815();
		_617._1817();
		_617._1756();
	}
	static _618()
	{
		if (!this._1740)
			return;
		setTimeout(this._1823, 100);
	}
	static _1823()
	{
		let _1746;
		_1746 = _617._1742;
		if (_1746.length)
			return;

		let _1824, _1825;
		_1824 = 0;
		for (let _620 = 0; _620 < _585.length; _620++)
		{
			let _445;
			_445 = _585[_620];
			if (_1011._1803(_445))
				continue;
			let _1826;
			_1826 = _445._1827;
			if (_1826 > _1824)
			{
				_1824 = _1826;
				_1825 = _620;
			}
		}
		if (_1824 == 0)
			return;
		_617._419(_1825);
	}
	static _1055(_1828)
	{
		this._1740 = _1828;
		if (_1828)
		{
			_81.checked = true;

			_123.style.width = "128px";

			_126.style.position = "absolute";
			_126.style.left = "-70px";
			_126.style.top = "-60px";
			_127.style.fontSize = "smaller";
			_128.style.display = "none";

			_129._1416(80, 14);

			_130.style.position = "absolute";
			_130.style.left = "-70px";
			_130.style.top = "-30px";
			_130.style.textAlign = "left";
			_131.style.width = "28px";
			_131.style.height = "28px";
			_132.style.display = "none";

			_134.style.position = "absolute";
			_134.style.left = "-70px";
			_134.style.top = "-30px";
			_134.style.textAlign = "left";
			_135.style.width = "28px";
			_135.style.height = "28px";
			_135.src = "_441.png";
			_136.style.display = "none";

			_617._618();
		}
		else
		{
			_81.checked = false;

			_123.style.width = "";

			_126.style.position = "";
			_126.style.left = "";
			_126.style.top = "";
			_127.style.fontSize = "";
			_128.style.display = "";

			_129._1416(100, 15);

			_130.style.position = "";
			_130.style.left = "";
			_130.style.top = "";
			_130.style.textAlign = "center";
			_131.style.width = "32px";
			_131.style.height = "32px";
			_132.style.display = "";

			_134.style.position = "";
			_134.style.left = "";
			_134.style.top = "";
			_134.style.textAlign = "center";
			_135.style.width = "32px";
			_135.style.height = "32px";
			_135.src = "_440.png";
			_136.style.display = "";
			
		}
		this._1809();
	}
}

async function _647(_445, _620)
{
	return await _617._1768(_445, _620);
}

